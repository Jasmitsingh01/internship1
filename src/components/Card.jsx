
function Card({name,img,tagline,discription,contributer}) {
const contibuter=contributer.split('<')
  return (
<div className=" border-2 p-3 m-2 rounded flex flex-col">
    <div className="border-2 mb-2 p-2">
    <img src={img} alt="Product"  className=" w-[100px] h-[300px] object-fill mx-auto  "/>

    </div>
  <div>
    <h4 className=" text-2xl font-semibold">Name</h4>
    <p className=" mb-2 text-slate-300 font-semibold"> {name}</p>
    <h4  className=" text-2xl font-semibold">Tagline</h4>

    <p className="mb-2">{tagline}</p>
    <h4 className=" text-2xl font-semibold">Discription</h4>

    <p className="mb-2">{discription}</p>
    <h4  className=" text-2xl font-semibold">Contributor</h4>

    <p className="mb-2">{contibuter[0]}</p>
  </div>

</div>
    )
}

export default Card