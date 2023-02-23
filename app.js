require("dotenv").config()
const express                = require("express");
const bodyParser             = require("body-parser");
const mongoose               = require("mongoose");
const covers                 = require("./covers.json").covers;
const cors                   = require('cors');
const schedule               = require('node-schedule')
const path                   = require('path');



const cheapshark = "https://www.cheapshark.com/api/1.0/deals";
// const twitchEndPoint = "https://api.igdb.com/v4/"
// const TWITCH_CLIENT_ID=process.env.TWITCH_CLIENT_ID
// const TWITCH_SECRET=process.env.TWITCH_SECRET
const ATLASPASS = process.env.ATLASPASS
const ATLASUSER = process.env.ATLASUSER
console.log(ATLASPASS,ATLASUSER)
const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'build')));

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://'+ATLASUSER+':'+ATLASPASS+'@cluster0.zxkgieq.mongodb.net/?retryWrites=true&w=majority');


const storeSchema = mongoose.Schema({
    storeID:Number,
    storeName:String,
    isActive:Number,
    banner:String,
    logo:String,
    icon:String
})
const coversScema = mongoose.Schema({
    imageURL:{
        type:String,
        unique:true
    }
})
const dealsSchema = mongoose.Schema({
    
    storeID:Number,
    dealID:String,
    price:Number,
    retailPrice:Number,
    savings:Number,
    storeInfo:{
        type:storeSchema
    }
})
const gameSchema = mongoose.Schema({
    title:{
        type:String,
        unique:true
    },
    gameID:{
        type:Number,
        unique:true
    },
    fetchedSteam:Boolean,
    thumb:String,
    steamAppID:Number,
    dealID:String,
    salePrice:Number,
    storeName:String,
    normalPrice:Number,
    steamRatingText: String,
    steamRatingPercent: Number,
    steamRatingCount: Number,
    ageLimit:Number,
    releaseDate: Number,
    publishers:[String],
    lastChange: String,
    deals:[dealsSchema],
    gameDescription:String,
    fetchDate:Number,
    screenShots:[String],

})


const Game  = new mongoose.model("Game",gameSchema);
const Deal  = new mongoose.model("Deal",dealsSchema);
const Store = new mongoose.model("Store",storeSchema);
const Cover = new mongoose.model("Cover",coversScema);



///////AUTHENTICATION









var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

//GET Requests

async function fetchStores(){
    fetch("https://www.cheapshark.com/api/1.0/stores",requestOptions)
    .then( data => data.json())
    .then(stores =>{
        stores.forEach(store =>{
            const newStore = new Store({
                storeID:store.storeID,
                storeName:store.storeName,
                isActive:store.isActive,
                banner:store.images.banner,
                logo:store.images.logo,
                icon:store.images.icon
            })
            newStore.save((err)=>{
                if(err){
                    console.log(err);
                }
            })
        })
    })
    .finally(() => console.log("Fetched Stores"))
    .catch(err => console.log(err))
}
async function fetchDeals(){
    fetch(cheapshark,requestOptions)
    .then((data)=> data.json())
    .then((games) =>  {
        games.sort((a,b)=>{
            return a.salePrice - b.salePrice;
        })
        games.forEach(async game => {
            const storeName = await Store.findOne({storeID:game.storeID})
            
            .then(result => result.storeName)
            .catch(err => console.log(err))
            console.log(storeName)
            const newGame = new Game({
                title:game.title,
                gameID:game.gameID,
                thumb:game.thumb,
                salePrice:game.salePrice,
                normalPrice:game.normalPrice,
                dealID:game.dealID,
                fetchedSteam:false,
                storeName:storeName,
                steamAppID:game.steamAppID,
                steamRatingText: game.steamRatingText,
                steamRatingPercent: game.steamRatingPercent,
                steamRatingCount: game.steamRatingCount,
                fetchDate: Date.now() / 1000,
                releaseDate: game.releaseDate,
                lastChange: game.lastChange,
               
            })
            newGame.save((err)=>{
                if(err){
                    console.log(err);
                }
            })
        })
    })
    .finally(() => console.log("Fetched Deals"))
    .catch(err => res.send(err))
}
function fetchCovers(){

            
    for(game in covers){
        const random = Math.floor(Math.random() * covers[game].length);
        const newCover = new Cover({
            imageURL:covers[game][random]
        }) 
        newCover.save();
    }
    console.log("Fetched Covers");


}

//filling the database 

function cleardb(){

    Game.remove({} , (err) => {
        if(err){
            console.log(err);
        }
        console.log("Cleared [Game]")
    } )
    Store.remove({} , (err) => {
        if(err){
            console.log(err);
        }
        console.log("Cleared [Store]")
    } )

    Deal.remove({} , (err) => {
        if(err){
            console.log(err);
        }
        console.log("Cleared [Deal]")
    } )

    Cover.remove({} , (err) => {
        if(err){
            console.log(err);
        }
        console.log("Cleared [Cover]")
    } )
} 
async function fetchData(){
    await Store.find({})
    .then( result => {
        if(result.length === 0){
            fetchStores()
        }
    })
    await Game.find({})
    .then(result => {
        if(result.length ===0 ){
            fetchDeals()
        }
        else if(Date.now() / 1000 - result[0].fetchDate >= 84600){
            cleardb()
            fetchDeals()
        }
    })
    await Cover.find({})
    .then(result => {
        if(result.length === 0 ){
            fetchCovers()
        }
    })
    return true 
}
//getting the data


function sort(result,filter){
    if(filter === "Expensive"){
        result.sort((a,b) =>{
            return b.salePrice - a.salePrice
        })
    }
    else if(filter === "Cheapest"){
        result.sort((a,b) =>{
            return a.salePrice - b.salePrice
        })
    }
    else if(filter === "Alpha"){
        result.sort((a,b) =>{
            if (a.title < b.title) {
                return -1;
              }
            if (a.title > b.title) {
                return 1;
            }
        })
    }
    else if(filter === "Newly"){
        result.sort((a,b) =>{
            return a.releaseDate - b.releaseDate
        })
    }
    else if(filter === "Old"){
        result.sort((a,b) =>{
            return b.releaseDate - a.releaseDate
        })
    }
    else if(filter === "Rating"){
        result.sort((a,b) =>{
            return b.steamRatingPercent - a.steamRatingPercent
        })
    }
    else{
        return result
    }
    return result
}

app.get("/api/", async(req,res)=>{
    console.log("Got A Get Request");
    const filter = req.query.sort;
    await fetchData()
    Game.find({})
    .then((result)=> { 
       
        if (result.length != 0)
        {   

            res.json(sort(result,filter))
        }
        else{
            res.send("No Result Found");
        }
    })

    .catch(error => console.log('error', error));

})
app.get("/api/info/:gameID",(req,res) =>{
    const gameID = req.params.gameID;
    Game.findOne({gameID:gameID})
    .then(async (result) => {
        if (result != null){
            
            if(result.deals.length != 0 && result.fetchedSteam != false ){
                result.deals.sort((a , b) =>{
                    return a.price - b.price;
                }) 
                return result
                
            }
            else{
                if(result.deals.length === 0){
                    const game = await fetch("https://www.cheapshark.com/api/1.0/games?id=" + gameID,requestOptions)
                    .then(response => response.json())
                    .catch(err => console.log(err))
                        console.log("FETCHED DEALS")
                        game.deals.map( async deal =>{
                            ///BUG not adding the store info to the deals array---> Fixed
                            const temp = await Store.findOne({storeID:deal.storeID})
                            .then(foundStore => {
                               
                                const newDeal = new Deal ({
                                    storeID:deal.storeID,
                                    dealID:deal.dealID,
                                    price:deal.price,
                                    retailPrice:deal.retailPrice,
                                    savings:deal.savings,
                                    storeInfo:foundStore
                                })
                                
                                return  newDeal
                            })
                            .catch(err => console.log(err))
                            
                            Game.findOneAndUpdate({gameID:gameID},{$push:{deals:temp}},(err) =>{
                                if(err){
                                    console.log(err);
                                }
                            });
                        })
                }


                if(result.fetchedSteam === false && result.steamAppID !== null){
                        const steamData = await fetch("https://store.steampowered.com/api/appdetails?appids=" + result.steamAppID)
                        .then(response => response.json())
                        .catch(err => console.log(err))
                            if(steamData && steamData[result.steamAppID].success === true){
                                const data = steamData[result.steamAppID].data
                                
                                const screenShots = data.screenshots.map((img)=> {
                                    return img.path_full
                                })
                                Game.findOneAndUpdate({gameID:gameID},{
                                    title:data.name,
                                    ageLimit:data.required_age,
                                    gameDescription:data.detailed_description.replace(/(<([^>]+)>)/gi, ""),
                                    thumb:data.header_image,
                                    screenShots:screenShots,
                                    fetchedSteam:true,
                                    steamRatingCount:data.recommendations.total,
                                    publishers:data.publishers
                                },(err) =>{
                                    if(err){
                                        console.log(err);
                                    }
                                })
                            }
                            else{
                                Game.findOneAndUpdate({gameID:gameID},{
                                    fetchedSteam:true,
                                },(err) =>{
                                    if(err){
                                        console.log(err);
                                    }
                                });
            
                            }
                }

                else{
                    Game.findOneAndUpdate({gameID:gameID},{
                        fetchedSteam:true,
                    },(err) =>{
                        if(err){
                            console.log(err);
                        }
                    });

                }
                
                const results = await Game.find({gameID:gameID})
                .then(result => result)
                .catch(err => console.log(err))
                return results
            }



        }
    })
    .then(data => res.json(data))
    .catch(err => console.log(err))
    // .catch(error => {
    //     res.send(error)
    //     console.log('error', error)});

})
app.get("/api/covers",(req,res) =>{
    
    Cover.find({})
    .then(result =>{
        const imagesArray = []
        if(result){
            result.forEach(image =>{
                imagesArray.push(image.imageURL);
            })
        }
        return imagesArray
    })
    .then((array) =>res.json(array))
    .catch(err => console.log(err))
})
///////POST REQUESTS
// app.post("/register",(req,res) =>{

// });
// app.post("/login",(req,res) =>{

// });

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
app.listen(4000,()=>{
    console.log("[+]Server Started On port 4000");
})