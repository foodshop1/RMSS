'use client';
import Card from './components/Card';
import studySpacesData from './study-spaces-data.json';

interface StudySpace {
  Building: string;
  'Room Number': string;
  'Seating Spaces': string;
  'Group/Individual': string;
  'Type of space': string;
  Image: string;
}

export default function Home() {
  const studySpaces: StudySpace[] = studySpacesData.study_spaces;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">UTSC Study Spaces</h1>

        {studySpaces.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>No study spaces found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {studySpaces.map((space, index) => (
              <Card
                key={`${space.Building}-${space['Room Number']}-${index}`} // 'key' - template literal (or template string).
                building={space.Building}
                roomNumber={space['Room Number']}
                seatingSpaces={space['Seating Spaces']}
                groupOrIndividual={space['Group/Individual']}
                typeOfSpace={space['Type of space']}
                image={space.Image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
