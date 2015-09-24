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

PokemonResource.getRandomPokemonResource = function() {
    var rand = Math.floor(Math.random()*150) + 1;
    return PokemonResource.getByResourceUri("/api/v1/pokemon/" + rand + "/");
};

PokemonResource.getByResourceUri = function(resourceUri) {
    return new PokemonResource(PokemonCache.getByResourceUri(resourceUri));
};

