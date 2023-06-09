import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 62px 124px 0px 124px;

  .desktop {
    display: flex;
    flex-direction: column;

    > h2 {
      margin-bottom: 39.5px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  .mobile {
    display: none;
  }

  @media(max-width: 750px) {
    .desktop {
      display: none;
    }

    .mobile {
      display: block;
      display: flex;
      flex-direction: column;

      > h2 {
        margin-bottom: 39.5px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }

      > div {
        margin-bottom: 16px;
      }
    }
  }

  @media(max-width:1279px) {
    margin: 62px 64px 0;
  }
`;

export const Slider = styled.div`
  display: flex;
  align-items: center;
  position: relative;


  > button {
    width: 60px;
    height: 100%;


    svg {
      width: 40px;
      height: 40px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    border: none;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
    z-index: 1;
  }

  .Slider {
    position: absolute;
    left: 0;
  }

  .arrow-forward {
    position: absolute;
    right: 0;
    color: red;
  }

  > div {
    width: 100%;
    display: flex;
    gap: 27px;
    overflow-x: auto;
    scroll-behavior: smooth;
        ::-webkit-scrollbar {
            display: none;
            color: red;
        }
  
    > div:first-child {
      margin-left: 60px;
    }
    > div:last-child {
      margin-right: 60px;
    }
  }
`;