var MoveResource = function(resource) {
    this.accuracy = resource.accuracy;
    this.category = resource.category;
    this.created = resource.created;
    this.description = resource.description;
    this.id = resource.id;
    this.modified = resource.modified;
    this.name = resource.name;
    this.power = resource.power;
    this.pp = resource.pp;
    this.resourceUri = resource.resource_uri;
};

MoveResource.getByResourceUri = function(resourceUri) {
    return new MoveResource(MoveCache.getByResourceUri(resourceUri));
};