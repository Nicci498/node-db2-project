exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl =>{
        tbl.increments();//id
  
        tbl
        .string('VIN', 120)
        .notNullable()
       
  
        tbl
        .string('Make', 120)
        .notNullable()
        
  
        tbl
        .string('Model', 120)
        .notNullable()
       
  
        tbl.integer('Mileage')
        .notNullable();
  
        tbl.string('TransmissionType', 120);
  
        tbl.string('TitleStatus', 120);     
  
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
  };
