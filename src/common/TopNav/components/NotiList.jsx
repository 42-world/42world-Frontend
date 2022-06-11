import styled from 'styled-components';

const NotiList = ({ title, body }) => {
    return (
   <>
   <NotiListStyle>
           <img src="/assets/like.svg"/>
           <div className="body">
             <div className="title">{title}</div>
             <div className="text">{body}</div>
           </div>
       </NotiListStyle>
                <div className="divide"></div>
</>
    )
}

export default NotiList;

const NotiListStyle = styled.div`
display : flex;
    max-height : 120px;
    * {
      margin :5px;
      overflow : hidden;
    }
    img { 
      min-width : 30px;
    }
`
