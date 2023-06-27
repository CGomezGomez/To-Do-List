import styled from "styled-components";


    const StyledContainerAll = styled.div`
        
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 0 auto;
        
    `;

    const StyledTitle = styled.div`

        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.4rem;
        letter-spacing: 0.6rem;
        color: white;
        margin-bottom: 14px;

    `;

    const StyledBox = styled.div`

        height: 64px;
        display: flex;
        align-items: center;
        gap: 24px;
        background-color: 
            ${props=>(props.dark 
                ? '#25273D' 
                : '#FFFFFF')};
        border-radius: 5px;
        padding-left: 24px;
    `;

    const StyledCircle= styled.input`
        
        height: 20px;
        width: 20px;
        border-radius: 50%;
        appearance: none;
        background: none;
        border: 1px solid grey;
            :checked {
                background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
            }
    
    `;
    const StyledInput= styled.input`
     
        font-size: 12px;
        background-color: transparent;
        color: ${props=>(props.dark
                ? 'white' 
                : 'black')};  
        border: none;
        :focus{
                outline: none;
        }
    `;

    const StyledContainerList = styled.div`
    
        width:  100%;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 600;
            


    `
    const StyledList = styled.div`
    
        width: 100%;
        height: 64px;
        display: flex;
        align-items: center;
        padding-left: 24px;
        background-color: ${props =>
            props.dark
                ? '#25273D'
                : '#FFFFFF'};
        box-shadow: 1px 35px 50px -15px rgba(0, 1, 0, 0.5);
        border: 1px solid rgba(0, 0, 0, 0.2);


        
`

    const StyledListText = styled.p`
        
        font-size: 15px;
        text-indent: 25px;
        color: ${props =>
            props.dark
                ? '#FFFFFF'
                : '#25273D'};
                

    `

    const StyledContainerFilter = styled.div`
    
        display: flex;
        align-items: center;
        flex-direction: row;
        height: 64px;
        width: 100%;
        background-color: ${props =>
            props.dark
                ? '#25273D'
                : '#FFFFFF'};
        border: 1px solid rgba(0, 0, 0, 0.2);
        font-weight: 400;
    
    `

    const StyledP = styled.p`

        padding-left: 20px;
        color: ${props =>
            props.dark
                ? 'grey'
                : '#25273D'};
    

    `

    const StyledFilter = styled.div`
    
        display: flex;
        flex-direction: row;
        padding-left: 120px;
        gap: 50px;
        color: ${props =>
            props.dark
                ? '#9495A5'
                : '#25273D'};
                

    `

    const StyledFilterBox = styled.button `

        border: none;
        background-color: transparent;
        color: grey;
        cursor: pointer;
        
        &:first-child {
            font-weight: 600;
            color: #3A7CFD; 
    }
        
    `    



    export {StyledContainerAll , StyledTitle , StyledBox ,StyledCircle , StyledInput , StyledContainerList , StyledList , StyledListText , StyledContainerFilter , StyledFilter , StyledFilterBox , StyledP }