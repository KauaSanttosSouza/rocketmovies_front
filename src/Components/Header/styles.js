import { styled } from "styled-components";

export const Container = styled.header`
   grid-area: header;
   display: flex;
   justify-content: space-between;
   padding: 2.3rem 12.5rem ;
   align-items: center;
   gap: 6.4rem;

   h1 { 
      font-weight: 700;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.PINK};
   }
   
   input {
      padding: 1.9rem 2.4rem;
      font-weight: 400;
      font-size: 1.4rem;
      height: 100%;
      width: 100%;
      border-radius: 1rem;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      border: none;

      ::placeholder {
         color: ${({ theme }) => theme.COLORS.GRAY_200}
      }
   }
`;

export const User = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: .9rem;
   min-width: 10rem;

   
   > div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      max-width: fit-content;

      
      h1 {
      font-size: 1.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE};
   };

   button {
      font-size: 1.4rem;
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.GRAY_200}
   }

   }

   img {
         width: 6.4rem;
         height: 6.4rem;
         border-radius: 50%;
         border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
      };

`;