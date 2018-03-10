describe('My app', () => {
	describe('showMenu', () => {
		it('show menu', () => {
			const navUl = document.createElement("ul");
			navUl.style.display = 'none';
			displayMenu(navUl);
			expect(navUl.style.display).toEqual('block');
		})
	})
})