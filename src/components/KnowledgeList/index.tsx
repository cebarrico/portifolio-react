import { kwnoledgeData } from "data/data";

export const KnowledgeList = () => {
  return (
    <>
      {kwnoledgeData.map((item, index) => (
        <li key={index} className="card-flip">
          <div className="front-li">
            <img src={item.image} alt="" />
            <h2>
              <span>⬡</span> {item.name}
            </h2>
          </div>
          <div className="back-li">
            <a href={item.doc}>{item.description}</a>
          </div>
        </li>
      ))}
    </>
  );
};
