cube(`Test`, {
  sql: `SELECT * FROM test.test`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [donorId, donorCity]
    }
  },
  
  dimensions: {
    donorId: {
      sql: `${CUBE}.\`Donor ID\``,
      type: `string`
    },
    
    donorCity: {
      sql: `${CUBE}.\`Donor City\``,
      type: `string`
    },
    
    donorState: {
      sql: `${CUBE}.\`Donor State\``,
      type: `string`
    },
    
    donorIsTeacher: {
      sql: `${CUBE}.\`Donor Is Teacher\``,
      type: `string`
    },
    
    donorZip: {
      sql: `${CUBE}.\`Donor Zip\``,
      type: `string`
    }
  }
});
