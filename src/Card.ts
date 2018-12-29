import { CardType } from './CardType'


export class Card
{
    private value : Number

    private sign  : String

    public constructor(value : Number, sign : String)
    {
        if(!this.assertValueInInterval(value))
        {
            throw new Error('Value is not between 1 and 14 or is 11')
        }

        if(!this.assertSignIsValid(sign))
        {
            throw new Error('Sign is not in valid array')
        }

        this.value = value
        this.sign  = sign
    }

    get cardValue()
    {
        return this.value
    }

    get cardSign()
    {
        return this.sign
    }

    set cardValue(value : Number)
    {
        if(!this.assertValueInInterval(value))
        {
            throw new Error('Value is not between 1 and 14 or is 11')
        }
        this.value = value
    }

    set cardSign(value : String)
    {
        if(!this.assertSignIsValid(value))
        {
            throw new Error('Sign is not in valid array')
        }

        this.sign = value
    }

    assertValueInInterval(value : Number)
    {
        return 0 < value && value <= 14 && value !== 11
    }

    assertSignIsValid(sign : String) : Boolean
    {
        return Object.values(CardType).includes(sign)
    }

    isGreater(card : Card)
    {
        if(card.cardValue < this.cardValue)
        {
            return true
        }
        return false
    }

    isLess(card : Card)
    {
        if(card.cardValue > this.cardValue)
        {
            return true
        }
        return false
    }

    isGreaterOrEqual(card : Card)
    {
        if(card.cardValue <= this.cardValue)
        {
            return true
        }
        return false
    }

    isLessOrEqual(card : Card)
    {
        if(card.cardValue >= this.cardValue)
        {
            return true
        }
        return false
    }

    isEqual(card : Card)
    {
        if(card.cardValue === this.cardValue)
        {
            return true
        }
        return false
    }

    isCard(card : Card)
    {
        if(card.cardValue === this.cardValue && card.cardSign === this.cardSign)
        {
            return true
        }
        return false
    }
}
