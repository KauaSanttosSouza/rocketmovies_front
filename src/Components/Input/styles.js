import { styled } from "styled-components";

export const Container = styled.div`

      input {
            padding: 1.9rem 2.4rem;
            font-weight: 400;
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
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