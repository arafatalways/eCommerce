import { decrement, increment } from "@/redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export const ProductAdd = () => {
  const count = useSelector((state: any) => state.addToCart.count);
  const dispatch = useDispatch();
  return (
    <div className="flex rounded-2xl">
      <div>
        <img className="max-w-80 h-60" src="images/rifel.jpg" alt="image" />
      </div>
      <div className="w-70 h-60 bg-[#8ec5ff] ">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Lorem ipsum dolor sit amet .</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facere
            mollitia veniam placeat ab, recusandae culpa.
          </p>
          <span className="my-4 inline-block">
            {" "}
            <button
              onClick={() => dispatch(increment())}
              className="bg-muted w-8 mr-3 rounded-[4px] text-[18px]"
            >
              +
            </button>
            <span>{count}</span>
            <button
              onClick={() => dispatch(decrement())}
              className="bg-muted w-8 ml-3 rounded-[4px] text-[18px]"
            >
              -
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
