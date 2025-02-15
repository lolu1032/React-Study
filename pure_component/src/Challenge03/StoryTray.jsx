export default function StoryTray({ stories }) {
    const a = stories.slice()
    a.push({
        id: 'create',
        label: 'Create Story'
    });
    
    return (
        <ul>
        {a.map(story => (
            <li key={story.id}>
            {story.label}
            </li>
        ))}
        </ul>
    );
}   
