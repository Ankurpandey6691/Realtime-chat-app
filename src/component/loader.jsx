import { RotatingLines } from 'react-loader-spinner'

export default function Loader() {
    return (
        <>
            <div className='h-screen w-full flex justify-center items-center'>
                <RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    color="blue"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        </>
    )
}
