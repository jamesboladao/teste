import { CloseButton } from "../../CloseButton";
import  sentFeedback  from "../../../assets/sent.svg"

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: ()=> void
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton/>
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={sentFeedback} alt="Feedback Enviado" />
        <span>Agradecemos o feedback</span>
        <button 
        onClick={onFeedbackRestartRequested}
        type="button"
        className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500" >
          Quero enviar outro
        </button>
      </div>

    </>
  )
}

