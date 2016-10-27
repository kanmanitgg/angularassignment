describe('My Password Controller', function() {

	beforeEach(module('app'));

	var ctrl;
	var wndw;

	beforeEach(inject(function(_$controller_,_$window_) {
		ctrl = _$controller_;
		wndw = _$window_;
	}));

	describe('My Password Controller - Grade', function() {
		it('sets the strength of the password as weak if the length is lesser than 3', function() {
			var scp = {};
			var ctrl1 = ctrl('PasswordController', { $scope:scp });
			scp.password = "daa";
			scp.grade();
			expect(scp.strength).to.equal('Weak');
		});
	});

	describe('My Password Controller - GradeNew', function() {
		it('return the strength of the password as weak if the length is lesser than 3', function() {
			var scp = {};
			var ctrl1 = ctrl('PasswordController', { $scope:scp });
			var password = 'daafsdtfse';
			var result = scp.gradeNew(password);
			expect(result).to.equal('Strong');
		});
	});
});
