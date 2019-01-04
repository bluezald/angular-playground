// Vendors
class FetchMusic {
    get resources() {
        return [
            { id: 1, title: "The Fragile" },
            { id: 2, title: "Alladin Sane" },
            { id: 3, title: "OK Computer" }
        ];
    }

    fetch(id) {
        return this.resources.find(item => item.id === id);
    }
}

class GetMovie {
    constructor(id) {
        return this.resources.find(item => item.id === id);
    }

    get resources() {
        return [
            { id: 1, title: "Apocalypse Now" },
            { id: 2, title: "Die Hard" },
            { id: 3, title: "Big Lebowski" }
        ];
    }
}

const getTvShow = function(id) {
    const resources = [
        { id: 1, title: "Twin Peaks" },
        { id: 2, title: "Luther" },
        { id: 3, title: "The Simpsons" }
    ];

    return resources.find(item => item.id === 1);
};

const booksResource = [
    { id: 1, title: "Ulysses" },
    { id: 2, title: "Ham on Rye" },
    { id: 3, title: "Quicksilver" }
];

// The Facade Pattern here:

const TYPE_MUSIC = "music";
const TYPE_MOVIE = "movie";
const TYPE_TV = "tv";
const TYPE_BOOK = "book";

class CultureFacade {
    
    constructor(type) {
        this.type = type;
    }

    get(id) {
        switch (this.type) {
            case TYPE_MUSIC: {
                return this.tryToReturn(this.findMusic, id);
            }

            case TYPE_MOVIE: {
            return this.tryToReturn(this.findMovie, id);
            }

            case TYPE_TV: {
            return this.tryToReturn(this.findTVShow, id);
            }

            case TYPE_BOOK: {
                return this.tryToReturn(this.findBook, id);
            }

            default: {
                throw new Error("No type set!");
            }
        }
    }

    get error() {
        return { status: 404, error: `No item with this id found` };
    }

    findMusic(id) {
        const db = new FetchMusic();
        return db.fetch(id);
    }
    
    findMovie(id) {
        return new GetMovie(id);
    }
    
    findTVShow(id) {
        return getTvShow(id);
    }
    
    findBook(id) {
        return booksResource.find(item => item.id === id);
    }

    tryToReturn(func, id) {
        const result = func.call(this, id);

        return new Promise((ok, err) => !!result
            ? ok(result)
            : err(this._error));
    }
}

// Usage

let music = new CultureFacade(TYPE_MUSIC);
music.get(3)
    .then( data => console.log(data) )
    .catch( error => console.log(error) );

let movies = new CultureFacade(TYPE_MOVIE);
movies.get(5)
    .then( data => console.log(data) )
    .catch( error => console.log(error) );