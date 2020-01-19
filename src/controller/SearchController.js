const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
  async index(request, response){
    const {latitude, longitude, maxDistance , techs} = request.query
    const techsArray = parseStringAsArray(techs)

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location:{
        $near:{
          $geometry:{
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: maxDistance
        }
      }
    })
    // Buscar todos os devs num raio de 10km
    // Filtrar por tecnologia.
    return response.json({devs})
  }
  
}