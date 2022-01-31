import React from 'react';
import Question_Item from './Question_Item';
const Question = () => {
    return <div className="features">
    <div className="features_detail dl_center_center_center">
 <h2>Frequent questions</h2>
 </div>
    <div className="question_wrapper dl_column">
        <Question_Item question="How can I contact you quickly and get a reasonable quote more for my project?" answer="Sed lacinia cursus viverra. Nunc sed libero euismod, congue dui a, vulputate quam. Pellentesque neque nisi, ultrices ut ipsum ac, mattis sollicitudin neque. Ut ac nunc sem. Etiam id erat facilisis magna sagittis porta. Donec eu dolor eu dolor finibus sodales consectetur, et condimentum elit tincidunt" />
        <Question_Item question="Is the Free Tier available for unlimited time or it will end more words after a while?" answer="Is the Free Tier available for unlimited time or it will end more words after a while?"/>
        <Question_Item question="Can I use the app on mobile devices or it’s limited more words to desktop use?" answer="Can I use the app on mobile devices or it’s limited more words to desktop use?"/>
    </div>
 </div>
};

export default Question;
