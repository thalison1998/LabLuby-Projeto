import { ButtonIndex, ContainerIndex } from "./styles";
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import imgSearch from '../../assets/search.svg'



export const ControlIndex = ({ onChange, setPageNumber, pageNumber }) => {
  const handleClick = ({ target }) => {
    const direction = target.dataset.direction;

    switch (direction) {
      case "prev":
        setPageNumber(() =>
          pageNumber === 1 ? (pageNumber = 1) : pageNumber - 1
        );
        break;
      case "next":
        setPageNumber(() =>
          pageNumber === 3 ? (pageNumber = 3) : pageNumber + 1
        );
        break;
      case "1":
        setPageNumber(1);
        break;
      case "2":
        setPageNumber(2);
        break;
      case "3":
        setPageNumber(3);
        break;
      default:
        return null;
    }
  };

  return (
    <ContainerIndex>
        <div>
      <button  className="prev" onClick={handleClick} data-direction="prev">
        <img src={arrowLeft} alt="seta para voltar" />
        Anterior
      </button>
        
      <ButtonIndex
        onClick={handleClick}
        data-direction="1"
        pageNumber={String(pageNumber)}
      >
        1
      </ButtonIndex>

      <ButtonIndex
        onClick={handleClick}
        data-direction="2"
        pageNumber={String(pageNumber)}
      >
        2
      </ButtonIndex>

      <ButtonIndex
        onClick={handleClick}
        data-direction="3"
        pageNumber={String(pageNumber)}
      >
        3
      </ButtonIndex>

      <button className="next" onClick={handleClick} data-direction="next">
        Proximo
        <img src={arrowRight} alt="seta para o próximo" />
      </button>
      </div>
      <label>
        <img src={imgSearch} alt="search" className="img-search"/>
        <input type="search"  onChange={onChange} />
      </label>
      
    </ContainerIndex>
  );
};
