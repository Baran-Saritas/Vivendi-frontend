import React from 'react'
import Stories from 'react-insta-stories';
const Story = () => {
    const stories = [
        'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
        'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
        'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
    ];
  return (

    <div>
		<Stories
			stories={stories}
			defaultInterval={1500}
			width={1200}
			height={768}
		/>
        
</div>
  )
}
export default Story;