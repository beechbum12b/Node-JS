import DS from 'ember-data';

var attr = DS.attr;  
  export default DS.Model.extend({
      firstName: attr('string'),
      lastName: attr('string'),
      middleInitial: attr('string'),
      title: attr('string'),
      phoneNumber: attr('string'),
      email: attr('string'),
      streetAddress: attr('string'),
      city: attr('string'),
      state: attr('string'),
      zipCode: attr('string'),
      createdAt: attr('date'),
      updatedAt: attr('date')
  }); 

  var localContact = {  
      contact: {
          first_name: 'Jack',
          middle_initial: undefined,
          last_name: 'Johnson',
          title: 'President',
          phone_number: '(555) 222-2034',
          email: 'jjohnson@test.net',
          street_address: '123 Some Street',
          city: 'Pittsburgh',
          state: 'PA',
          zip_code: '11223'
      }
  };
