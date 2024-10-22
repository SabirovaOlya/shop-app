import { useState } from 'react'
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import CampaignIcon from '@mui/icons-material/Campaign';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import https from '../../services/https';
import { alert } from '../alert/alert';
import './style.scss'



function FeedbackForm() {
    const [text, setText] = useState<string>()
    const [status, setStatus] = useState<boolean>(true)
    const [rating, setRating] = useState<number | null>(5);

    const handleSubmit = async () => {
        if (text?.trim()?.length === 0 || typeof (text) !== 'string') {
            return alert('Matn kiriting', 'error')
        }

        const data = {
            text: text,
            rating,
            is_positive: status
        }

        try {
            await https.post('/feedbacks/', data)
            alert('Feedback successfully was sent', 'success')
        }
        catch (err) {
            alert('Error', 'error')
        }
    }



    return (
        <div className='feedback_form'>
            <div className='feedback_form_boxs'>
                <button type='button' className={`positive ${status ? '' : 'no_active'}`} onClick={() => { setStatus(true) }}><CampaignIcon className='btn_icon' />Praise</button>
                <button type='button' className={`negative ${status ? 'no_active' : ''}`} onClick={() => { setStatus(false) }}><ReportProblemIcon className='btn_icon' /> Complaints</button>
            </div>
            <div className='my-4'>
                <p className='text-bold text-sm'>Rating:</p>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(_, newValue) => {
                        setRating(newValue);
                    }}
                />
            </div>
            <TextField
                id="outlined-multiline-static"
                fullWidth
                label="Text..."
                multiline
                rows={4}
                value={text}
                color={status ? 'success' : 'error'}
                onChange={(e) => {
                    setText(e.target.value)
                }}
            />

            <button className='submit_button' onClick={() => { handleSubmit() }}>Send <SendIcon className='btn_icon' /></button>

        </div>
    )
}

export default FeedbackForm