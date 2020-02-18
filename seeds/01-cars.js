
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN:'123', Make:'2020', Model:'Ford', Mileage: 1500, TransmissionType:'Manual', TitleStatus:'Clean'},
        {VIN:'345', Make:'2000', Model:'Dodge', Mileage: 15000, TransmissionType:'Manual', TitleStatus:'Salvaged'},
        {VIN:'678', Make:'2019', Model:'Lincoln', Mileage: 1800, TransmissionType:'Automatic', TitleStatus:'Clean'},
        {VIN:'987', Make:'2018', Model:'Audi', Mileage: 1200, TransmissionType:'Automatic', TitleStatus:'Clean'}
      ]);
    });
};
