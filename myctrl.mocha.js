/*describe('my controller',function(){

    beforeEach(module('crimecase'));

    var ctrl;

    beforeEach(inject(function(_$controller_){
    ctrl=_$controller_;
  }));

  describe('my controller-pagechng',function(){
    it('checking pagechng',function(){
      var obj={};
    var myctrl=ctrl('CrimeController',{$scope:obj});
      //obj.pagechng();
      //expect(self.pagecount).to.equal('5');
      expect(obj.hry).to.equal('hey');
      //expect(obj.testvar).to.equal('one');
    });
  });
});
*/
describe('component: crimeCases ', function() {
  var $componentController;
  beforeEach(module('crimecase'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));
it('checking pagechng',function(){
    var obj={};
    var myctrl=$componentController('crimeCases',{$scope:obj});
      var hel=obj.pagechng();
    expect(obj.pageCount).to.equal('5');
    //expect(obj.testvar).to.equal('one');
    //expect(obj.hry).to.equal('hey');
    //expect(obj.testvar).to.equal('one');
  });
});
