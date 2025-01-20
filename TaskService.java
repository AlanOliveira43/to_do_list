@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public List<Task> findAll() { return taskRepository.findAll(); }
    public Task save(Task task) { return taskRepository.save(task); }
    public void deleteById(Long id) { taskRepository.deleteById(id); }
}
