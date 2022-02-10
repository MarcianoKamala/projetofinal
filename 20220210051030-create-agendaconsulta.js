
module.exports = {

 up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('agendaconsulta',{
     id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      autocrement: true,
      primarykey: true,
     },
     name:{
       type: Sequelize.STRING,
       allowNull: false,

     },
     contato:{
       type: Sequelize.FLOAT,
       allowNull: false,
     },
     cidade: {
       type: Sequelize.STRING,
       unique: true,
       allowNull: false,
     },
     bairro:{
       type: Sequelize.STRING,
       allowNull: false,
       unique: true
     },
     sus: {
       type: Sequelize.FLOAT,
       allowNull: false,
     },
     create_at:{
      type: Sequelize.DATE,
      allowNull: false,
     },
     update_at:{
       type: Sequelize.DATE,
       allowNull: false,
     }

   });
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
