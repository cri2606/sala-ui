import styles from './grid.module.css';

export const Grid = () => {
  return (
    <>
    {/* one column */}
    <div className="flex mb-4">
      <div className="w-full bg-gray-500 h-12"></div>
    </div>
    
    {/* two columns */}
    <div className="flex mb-4">
      <div className="w-1/2 bg-gray-400 h-12"></div>
      <div className="w-1/2 bg-gray-500 h-12"></div>
    </div>
    
    {/* three columns */}
    <div className="flex mb-4">
      <div className="w-1/3 bg-gray-400 h-12"></div>
      <div className="w-1/3 bg-gray-500 h-12"></div>
      <div className="w-1/3 bg-gray-400 h-12"></div>
    </div>
    
    {/* four columns */}
    <div className="flex mb-4">
      <div className="w-1/4 bg-gray-500 h-12"></div>
      <div className="w-1/4 bg-gray-400 h-12"></div>
      <div className="w-1/4 bg-gray-500 h-12"></div>
      <div className="w-1/4 bg-gray-400 h-12"></div>
    </div>
    
    {/* five columns */}
    <div className="flex mb-4">
      <div className="w-1/5 bg-gray-500 h-12"></div>
      <div className="w-1/5 bg-gray-400 h-12"></div>
      <div className="w-1/5 bg-gray-500 h-12"></div>
      <div className="w-1/5 bg-gray-400 h-12"></div>
      <div className="w-1/5 bg-gray-500 h-12"></div>
    </div>
    
    {/* six columns */}
    <div className="flex">
      <div className="w-1/6 bg-gray-400 h-12"></div>
      <div className="w-1/6 bg-gray-500 h-12"></div>
      <div className="w-1/6 bg-gray-400 h-12"></div>
      <div className="w-1/6 bg-gray-500 h-12"></div>
      <div className="w-1/6 bg-gray-400 h-12"></div>
      <div className="w-1/6 bg-gray-500 h-12"></div>
    </div>
    </>
  );
}

export default Grid;
