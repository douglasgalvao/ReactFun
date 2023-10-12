interface ScreenProps{
    width:string,
    height:string,
    backgroundColor:string,
    radius:string
    titleScreen:string,
    titleColor:string
}

export const Screen = ({width,height,backgroundColor,radius,titleScreen,titleColor}:ScreenProps) => {
    return <div style={{width:width,height:height,backgroundColor:backgroundColor,borderRadius:radius}}>
        <div style={{width:'100%',height:'100%',justifyContent:'center',display:'flex'}}>
            <h1 style={{color:titleColor}}>{titleScreen}</h1>
        </div>
    </div>
}