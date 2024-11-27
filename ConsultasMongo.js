
//Ejercicio 1
db.movies.insertOne({id: 'gg1234567', title: 'Mi primera pelicula', type: 'movie', generes: 'Drama', averageRatting: 8.1, numVotes: 12 ,releaseYear: 2024})

db.movies.find({id: 'gg1234567'});

db.movies.updateOne({id: 'gg1234567'}, {$set:{releaseYear: 2001}});

db.movies.find({id: 'gg1234567'});

db.movies.deleteOne({id: 'gg1234567'});

db.movies.find({id: 'gg1234567'});



//Ejercicio 2
db.movies.aggregate([
    {
        $match: {
            releaseYear: { $gte: 2000, $lte: 2010 }
        }
    },
    {
        $group: {
            _id: "$releaseYear",
            totalVotos: { $sum: "$numVotes" }
        }
    }
]);


//Ejercicio 3
db.movies.aggregate([
    {
        $match: {
            genres: { $regex: "Drama", $options: "i" },
            releaseYear: { $gt: 2001 },
            averageRating: { $ne: null }
        }
    },
    {
        $group: {
            _id: "$genres",
            promedioCalificacion: { $avg: "$averageRating" }
        }
    },
    {
        $sort: { promedioCalificacion: -1 }
    },
    {
        $limit: 1
    }
]);