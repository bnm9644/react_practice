const Container = ({children}) => {
    console.log(children);
    return (
    <div style= {{argin : 20, padding : 20, border :"1px solid gray"}}>
        {children}
    </div>
    );
    
};

export default Container;
