import { css } from 'styled-components'
export const GloablWrapp = css`
width: 100%;
max-width: 1500px;
margin-left: auto;
margin-right: auto;
color: #f5f5f5;
padding: 2px 20px;
@media (min-width: 768px) {
  padding: 5px 60px;
}
@media (min-width: 992px) {
  padding-top: 100px;
}
@media (min-width: 1200px) {
  padding: 20px 120px;
}
`

export const GloablTitle = css`
    font-weight: 500;
  font-size: 30px;
  line-height: 40px;
  max-width: 280px;
  margin-bottom: 70px;
  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 48px;
    line-height: 80px;
    max-width: 500px;
  }
  @media (min-width: 1200px) {
    font-weight: 500;
    font-size: 90px;
    line-height: 120px;
    max-width: 750px;
  }
`