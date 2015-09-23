var PokemonResource = function(resource) {
    this.abilities = resource.abilities;
    this.attack = resource.attack;
    this.catchRate = resource.catch_rate;
    this.created = resource.created;
    this.defense = resource.defense;
    this.eggCycles = resource.egg_cycles;
    this.eggGroups = resource.egg_groups;
    this.evYield = resource.ev_yield;
    this.evolutions = resource.evolutions;
    this.exp = resource.exp;
    this.growthRate = resource.growth_rate;
    this.happiness = resource.happiness;
    this.height = resource.height;
    this.hp = resource.hp;
    this.maleFemaleRatio = resource.male_female_ratio;
    this.modified = resource.modified;
    this.moves = resource.moves;
    this.name = resource.name;
    this.nationalId = resource.national_id;
    this.resourceUri = resource.resource_uri;
    this.spAtk = resource.sp_atk;
    this.spDef = resource.sp_def;
    this.species = resource.species;
    this.speed = resource.speed;
    this.total = resource.total;
    this.types = resource.types;
    this.weight = resource.weight;
};

PokemonResource.getRandomPokemonResource = function(callback) {
    var rand = Math.floor(Math.random()*150) + 1;
    PokemonResource.getByResourceUri("/api/v1/pokemon/" + rand + "/", callback);
};

PokemonResource.getByResourceUri = function(resourceUri, callback) {
    if (resourceUri in pokemonCache) {
        console.log("Using cache for pokemon...");
        callback(pokemonCache[resourceUri]);
    } else {
        $.ajax({
            url: "http://pokeapi.co" + resourceUri,
            success: function(data) {
                var resource = new PokemonResource(data);
                pokemonCache[resourceUri] = resource;
                callback(resource);
            }
        });
    }
};

var pokemonCache = {};
/*
{
    "abilities": [
        {
            "name": "overgrow",
            "resource_uri": "/api/v1/ability/1/"
        },
        {
            "name": "chlorophyll",
            "resource_uri": "/api/v1/ability/2/"
        }
    ],
    "attack": 49,
    "catch_rate": 45,
    "created": "2013-11-02T12:08:25.745455",
    "defense": 49,
    "egg_cycles": 21,
    "egg_groups": [
        {
            "name": "Monster",
            "resource_uri": "/api/v1/egg/1/"
        },
        {
            "name": "Grass",
            "resource_uri": "/api/v1/egg/8/"
        }
    ],
    "ev_yield": "1 Sp Atk",
    "evolutions": {
        "level": 16,
        "method": "level up",
        "resource_uri": "/api/v1/pokemon/2/",
        "to": "Ivysaur"
    },
    "exp": 64,
    "growth_rate": "ms",
    "happiness": 70,
    "height": "2'4",
    "hp": 45,
    "male_female_ratio": "87.5/12.5",
    "modified": "2013-11-02T13:28:04.914889",
    "moves": [
        {
            "learn_type": "other",
            "name": "Tackle",
            "resource_uri": "/api/v1/move/1/"
        },
        {
            "learn_type": "other",
            "name": "Growl",
            "resource_uri": "/api/v1/move/2/"
        },
        {
            "learn_type": "level up",
            "level": 10,
            "name": "Vine whip",
            "resource_uri": "/api/v1/move/3/"
        }
    ],
    "name": "Bulbasaur",
    "national_id": 1,
    "resource_uri": "/api/v1/pokemon/4/",
    "sp_atk": 65,
    "sp_def": 65,
    "species": "seed pokemon",
    "speed": 45,
    "total": 318,
    "types": [
        {
            "name": "grass",
            "resource_uri": "/api/v1/type/5/"
        },
        {
            "name": "poison",
            "resource_uri": "/api/v1/type/8/"
        }
    ],
    "weight": "15.2lbs"
}
*/

