import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Adjust column width based on viewport */
  gap: 20px;
  padding: 20px; /* Add padding for better spacing */
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Switch to two columns on smaller screens */
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr); /* Switch to single column on even smaller screens */
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 32px; /* Decrease font size on smaller screens */
  }
  
  @media (max-width: 480px) {
    font-size: 28px; /* Further decrease font size on even smaller screens */
  }
`;
