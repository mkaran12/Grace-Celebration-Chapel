const branches = [
  {
    name: 'Grace Community Church - Central',
    pastor: 'Rev. John Mwangi',
    location: 'Meru Town, Kenya',
  },
  {
    name: 'Grace Community Church - East',
    pastor: 'Pastor Mary Wambui',
    location: 'Maua, Kenya',
  },
  {
    name: 'Grace Community Church - West',
    pastor: 'Pastor Samuel Kariuki',
    location: 'Nkubu, Kenya',
  },
  {
    name: 'Grace Community Church - North',
    pastor: 'Pastor Esther Njeri',
    location: 'Timau, Kenya',
  },
  {
    name: 'Grace Community Church - South',
    pastor: 'Pastor Peter Muriuki',
    location: 'Chogoria, Kenya',
  },
]

const ChurchBranches = () => (
  <div className='max-w-3xl mx-auto py-10 px-4'>
    <h1 className='text-2xl font-bold mb-6'>Church Branches</h1>
    <ul>
      {branches.map((branch, idx) => (
        <li key={idx} className='mb-6 border-b pb-4'>
          <h2 className='text-xl font-semibold'>{branch.name}</h2>
          <p>
            <strong>Lead Pastor:</strong> {branch.pastor}
          </p>
          <p>
            <strong>Location:</strong> {branch.location}
          </p>
        </li>
      ))}
    </ul>
  </div>
)

export default ChurchBranches
