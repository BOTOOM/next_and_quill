import dynamic from 'next/dynamic'
const RichTextNoSSRWrapper = dynamic(
	() => import('./RichTextArea'),
	{
		ssr: false,
		// eslint-disable-next-line react/display-name
		loading: () => <p>Loading ...</p>,
	}
)

const RichText = ({ name, value, onChange }: any) => {
	return (
		<>
			<RichTextNoSSRWrapper/>
		</>
	)
}

export default RichText
