const CRUD = require("./../../db/db.js");

async function getAllChalanges(req, res){
    try {
        let db = await new CRUD("trustly", "chalanges");
        let users = await new CRUD("trustly", "users");
        let ret = await db.ReadMany({});
        ret?.sort((a, b) => {
            let aScore = 0;
            let bScore = 0;
            aScore += (a.likes - b.likes)*3;
            bScore += (b.likes - a.likes)*3;
            if(a.last_updated){
                if(b.last_updated){
                    aScore += (a.last_updated - b.last_updated)/3600000;
                }else{
                    aScore += (a.last_updated - b.sorting_time)/3600000;
                }
            }else{
                if(b.last_updated){
                    aScore += (a.sorting_time - b.last_updated)/3600000;
                }else{
                    aScore += (a.sorting_time - b.sorting_time)/3600000;
                }
            }
            if(b.last_updated){
                if(a.last_updated){
                    bScore += (b.last_updated - a.last_updated)/3600000;
                }else{
                    bScore += (b.last_updated - a.sorting_time)/3600000;
                }
            }else{
                if(a.last_updated){
                    bScore += (b.sorting_time - a.last_updated)/3600000;
                }else{
                    bScore += (b.sorting_time - a.sorting_time)/3600000;
                }
            }
            if(a.status === "започнат"){
                aScore += 10
            }
            if(b.status === "започнат"){
                bScore += 10
            }

            if(a.status === "завършен"){
                aScore -= 5
            }
            if(b.status === "завършен"){
                bScore -= 5
            }
            return aScore > bScore ? -1 : 1;
        });
        let creatorIds = ret?.map((ret) => {
            return ret.creator;
        });
        let creators = await users.ReadMany({
            _id: { $in: creatorIds }
        });
        let actualCreators = creatorIds;
        ret?.map((ret, i) => {
            creators?.map((creator) => {
                if(creator._id.equals(ret.creator)){
                    actualCreators[i] = creator;
                }
            });
        });
        res.status(200).send({
            data: ret,
            creators: actualCreators
        });
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
}

module.exports = { getAllChalanges };