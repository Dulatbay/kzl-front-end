import {motion} from 'framer-motion';

interface Props {
    title: string;
    description: string;
    imageUrl: string;
    isImageLeft: boolean;
}

const FeatureSection = ({title, description, imageUrl, isImageLeft}: Props) => (
    <motion.div
        className="h-[70vh] w-full flex justify-center items-center text-white"
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 1}}
    >
        <div className="max-w-[1200px] w-full flex items-center h-fit gap-4">
            {
                !isImageLeft ? <div className="w-1/2 flex flex-col justify-center items-start text-left p-8">
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                    <p className="text-lg">
                        {description}
                    </p>
                </div> : <div
                    className="h-80 w-full rounded-2xl"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                ></div>
            }

            {
                isImageLeft ? <div className="w-1/2 flex flex-col justify-center items-start text-left p-8">
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                    <p className="text-lg">
                        {description}
                    </p>
                </div> : <div
                    className="h-80 w-full rounded-2xl"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                ></div>
            }
        </div>
    </motion.div>
);

export default FeatureSection;
