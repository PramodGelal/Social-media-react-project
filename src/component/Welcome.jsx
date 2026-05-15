export function Welcome({ getPost }){

    return (<><h1>Add the Post to see the Posts </h1>
         <button className="btn btn-primary" onClick={getPost}>Get data from server </button></>
    );
}