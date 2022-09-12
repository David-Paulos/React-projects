interface MemesDataObj {
  box_count: number,
  height: number,
  id: string,
  name: string,
  url: string,
  width: string,
}

export interface MemesDataArr extends Array<MemesDataObj>{} 

export interface FormStateValues  {
    topText: string,
    bottomText: string,
}
export interface FormProps {
    formValues: {
        topText: string,
        bottomText: string,
    },
    handleChange:(e:React.ChangeEvent<HTMLInputElement>) => void
}
export interface MemeProps{
    imgSrc: string,
    formValues: FormStateValues
}