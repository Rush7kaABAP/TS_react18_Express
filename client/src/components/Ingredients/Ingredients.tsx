import {Ingredient} from "../Ingredient/Ingredient";

interface IngredientsProps{
    ingredients: Array<string>,
    className?: string
}

export const Ingredients: React.FC<IngredientsProps> = ({ingredients}) => {
    return <div>
        {ingredients.map((ingredient:string) => <Ingredient name={ingredient}/>)}
    </div>
}