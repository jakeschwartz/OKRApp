module.exports = [

    {from: '/static/*', to: 'static/*'},

	// Show the start page
    {from: '/', to: '_show/start'},
    
    // Add an OKR
	{from: '/addOKR', to: '_show/addOKR'},
	
	// Show createuser
    {from: '/createuser', to: '_show/createuser'},
    
    // Show createuser
    {from: '/myOKRs', to: '_show/myOKRs'},
	
	   // Show createuser
    {from: '/allOKRs', to: '_show/allOKRs'},

	// Show logout
    {from: '/logout', to: '_show/logout'},

	// Show login
    {from: '/login', to: '_show/login'},
    
	// Show one OKR
    {from: '/:id', to: '_show/OKR/:id'},
    
 
    
    //show list of Okrs 
    {from: '/OKRs', to: '_list/OKRs/objectives'},
    
	// Fall back to 404 page
    {from: '*', to: '_show/not_found'}
    
    
  
];