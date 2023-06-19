type Props = {
    promise : Promise<Post[]>
}

export default async function UserPosts({ promise }: Props) {
  return (
    <div>UserPosts</div>
  )
}
