type PageTitlePropsType = {
    title: string
}

export const PageTitle = (props: PageTitlePropsType) => {
    return (
        <div>
            {props.title}
        </div>
    )
}