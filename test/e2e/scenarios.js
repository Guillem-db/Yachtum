'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Yachtum', function() {
    it('should redirect index.html to index.html#/phones', function() {
      browser.get('app/index.html');
      browser.getLocationAbsUrl().then(function(url) {
         expect(url.split('#')[1]).toBe('/barcos');
      });
    });
  describe('Barcos list view', function() {

    beforeEach(function() {
      browser.get('app/index.html#/barcos');
    });


    it('should filter the barcos list as user types into the search box', function() {

      var barcoList = element.all(by.repeater('barco in barcos'));
      var query = element(by.model('query'));

      expect(barcoList.count()).toBe(3);

      query.sendKeys('Barco');
      expect(barcoList.count()).toBe(3);

      query.clear();
      query.sendKeys('velero');
      expect(barcoList.count()).toBe(1);
    });
    it('should render barco specific links', function() {
     var query = element(by.model('query'));
     query.sendKeys('yate');
     element(by.css('.barcos li a')).click();
     browser.getLocationAbsUrl().then(function(url) {
       expect(url.split('#')[1]).toBe('/barcos/Megayate');
       });
     });
  });
describe('Phone detail view', function() {
 
    beforeEach(function() {
      browser.get('app/index.html#/phones/Megayate');
    });

    it('should display placeholder page with barcoId', function() {
      expect(element(by.binding('barcoId')).getText()).toBe('Megayate');
      });
   });  
});