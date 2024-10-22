export interface QnAData {
    question: string;
    answer: string;
}


export interface QuestionProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}
