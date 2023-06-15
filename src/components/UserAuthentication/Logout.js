import React from 'react'

const Logout = () => {

    const logout = async () => {
        try {
          const response = await fetch('/api/v1/auth/logout', {
            method: 'POST',
          });
    
          if (response.ok) {
            // Perform any necessary actions after successful logout
            console.log('Logout successful');
            localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        console.log('Logout successful');
        console.log(localStorage.getItem('accessToken'));
            // Navigate('/login')
          } else {
            // Handle error case if the logout request was not successful
            console.error('Logout failed');
          }
        } catch (error) {
          // Handle error case if there was an error making the logout request
          console.error('Error during logout:', error);
          localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        console.log(localStorage.getItem('accessToken'));
        


        }
        };  

  return (
    <div></div>
  )
}

export default Logout