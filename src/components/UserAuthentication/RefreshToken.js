import React from 'react'

export const RefreshToken = (refreshToken) => {

  return fetch('localhost:8080/api/v1/auth/refresh-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Token refresh failed');
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("accessToken", data.access_token);
      localStorage.setItem9("refreshToken", data.Refresh_token)
    })
    .catch((error) => {
      console.error('Error refreshing token:', error);
      
      // Handle error case, such as logging out the user or showing an error message
    });
  return (
    <div>RefreshToken</div>
  )

}
