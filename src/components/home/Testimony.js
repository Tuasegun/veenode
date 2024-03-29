import React from 'react'

import styled from 'styled-components'

const Testimony = () => {
    return (
        <TestimonyContainer>
            <div className="testimony-content">
                <h4>testimonial</h4>
                <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Tristique et feugiat ac, neque. Netus lobortis enim 
                    adipiscing iaculis quis malesuada ac.”
                </p>

                <div className="testimony-author">Cameron Williamson</div>
            </div>
        </TestimonyContainer>
    )
}

export default Testimony

const TestimonyContainer = styled.section`
    width: 100%;
    max-width: 100vw;
    padding: 3rem 6%;

    @media (max-width: 768px) {
        padding: 3rem 2rem;
    }
    
    .testimony-content {
        max-width: 786px;
        margin: 3rem auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h4 {
            font-size: 2rem;
            font-weight: 600;
            color: #0D0C0C;
            margin-bottom: 1.5rem;
            text-transform: uppercase;
            text-align: center;

            @media (max-width: 768px) {
                font-size: 1.5rem;
            }
        }

        p {
            font-size: 2.5rem;
            font-weight: 600;
            color: #0D0C0C;
            line-height: 1.6;
            font-style: italic;
            margin-bottom: 2rem;
            text-align: center;

            @media (max-width: 768px) {
                font-size: 1rem;
            }
        }

        .testimony-author {
            font-size: 1.5rem;
            font-weight: 400;
            color: #0D0C0C;
            text-align: center;

            @media (max-width: 768px) {
                font-size: 1rem;
            }
        }
    }
`